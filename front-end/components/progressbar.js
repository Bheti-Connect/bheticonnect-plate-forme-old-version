export const colorRange = () => {

    switch (true) {
        case (this.props.percentage <= 25):
            return 'twenty-five';
        case (this.props.percentage <= 40):
            return 'forty';
        case (this.props.percentage <= 55):
            return 'fifty-five';
        case (this.props.percentage <= 69):
            return 'sixty-nine';
        case (this.props.percentage <= 70):
            return 'seventy';
        case (this.props.percentage <= 80):
            return 'eighty';
        case (this.props.percentage <= 100):
            return 'hundred';
        default:    return '#000000';
    }
}