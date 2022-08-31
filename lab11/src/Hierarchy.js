import React from "react";
import { Component } from "react";

export default class Hierarchy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tree: props.tree
        };

        this.takenIds = [];

        this.addId = this.addId.bind(this);
    }

    addId(id) {
        let taken = false;
        for (let i = 0; i < this.takenIds.length; i++) {
            if (this.takenIds[i] === id) {
                taken = true;
                break;
            }
        }
        if (taken) {
            return false;
        } else {
            this.takenIds.push(id);
            return true;
        }
    }

    render() {
        return (
            <div>{this.props.tree.map((value) => {
                return <HierarchyErrorBoundary>
                        <HierarchyNode {...value} root={this}/>
                    </HierarchyErrorBoundary>;
            })}</div>
        );
    }
}

class HierarchyNode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        };
        this.added = false;

        this.validate = this.validate.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.validate();
    }

    validate() {
        if (!this.props.id) throw new Error("Id must be present");
        if (this.props.onClick) {
            if (typeof this.props.onClick !== "function") {
                throw new Error("onClick prop must be a function");
            }
        }
        let result = this.props.root.addId(this.props.id);
        if (!this.added && !result) {
            throw new Error("Id " + this.props.id + ", " + (typeof this.props.id) + " is not unique");
        }
        this.added = true;
    }

    handleClick() {
        if (this.props.childs) {
            this.setState({
                expanded: !this.state.expanded
            });
        }
        if (this.props.onClick) this.props.onClick(this.props.id);
    }

    render() {
        return (
            <div className="node">
                <div className="node-head" onClick={this.handleClick}>
                    <img alt="icon" className={'arrow' + (this.state.expanded ? ' rotated' : '') + (this.props.childs ? '' : ' hidden')} src="/icons/chevron-right-solid.svg"/>
                    <img alt="icon" className="icon" src={this.props.icon}/> {this.props.name}
                </div>
                <div className="children-container" style={{display: this.state.expanded ? 'block' : 'none'}}>{((function() {
                    if (this.props.childs) {
                        return this.props.childs.map((value) => {
                            return <HierarchyErrorBoundary>
                                    <HierarchyNode {...value} root={this.props.root}/>
                                </HierarchyErrorBoundary>;
                        });
                    }
                    return null;
                }).bind(this))()}</div>
            </div>
        );
    }
}

class HierarchyErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        return this.state.hasError ? <div>Error</div> : <>{this.props.children}</>;
    }
}