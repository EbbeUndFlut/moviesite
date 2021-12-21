import React, { Component } from "react"

class Klasser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: {},
        }
    }

    componentDidMount() {
        let test = async () => {
            let res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
            res = await res.json()
            this.setState({ movies: res })
        }
        test()
    }
    render() {
        let items = []
        for (const movie in this.state.movies) {
            items.push(<p>{this.state.movies[movie]}</p>)
        }
        return <div>{items}</div>
    }
}

export default Klasser
