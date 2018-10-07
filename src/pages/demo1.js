/**
 * Created by jialeren on 2018/9/17.
 */
import React, { Component } from 'react';
import WeatherStore from '../store/index';
import updateWeather from '../actions/action';
import _ from 'lodash';

class Demo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedId: null
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange() {
        this.setState({
            selectedId: WeatherStore.getDailyInfo().locationId
        })
    }

    componentDidMount() {
        WeatherStore.addChangeListener(this.onChange)
        updateWeather(2)
    }

    componentWillUnmount() {
        WeatherStore.removeChangeListener(this.onChange)
    }
    render() {
        const { selectedId } = this.state;
        return (
            <div>
                <p>
                    {selectedId}
                </p>
                <p>
                    { _.join(['Hello', 'webpack'], ' ')}
                </p>
            </div>
        )
    }
}

export default Demo;