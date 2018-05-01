import * as React from 'react';
import Wrapper from './Wrapper';
import Button from './Button';

interface ToTopBtnProps {
    offset: number;
}

interface ToTopBtnState {
    isBtnVisible: boolean;
}

export class ToTopBtn extends React.Component<ToTopBtnProps, ToTopBtnState> {

    static defaultProps: ToTopBtnProps = {
        offset: 30
    };

    state = {
        isBtnVisible: false,
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.pageYOffset > this.props.offset) {
            this.setState({isBtnVisible: true});
        } else {
            this.setState({isBtnVisible: false});
        }
    }

    handleClick = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    render() {
        return (
            <Wrapper>
                <Button onClick={this.handleClick} isBtnVisible={this.state.isBtnVisible}>
                    <svg>
                        <use xlinkHref="#chevron-up" />
                    </svg>
                </Button>
            </Wrapper>
        );
    }
}