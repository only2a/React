function mapStateToProps(component) {
    
    switch(component) {   
        case "Modal": {
            return function (state) {
                console.log(state)
                return {
                    goods: state.goods
                };
            }
        }
        case "Component_2": {
            return function(state) {
                return {
                    value_2: state.value_2
                };
            }
        }
        default: return undefined;
    }
}

export default mapStateToProps;