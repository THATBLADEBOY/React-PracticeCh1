import React, { Component } from 'react'


export default class LocationList  extends Component {
    render() {
        return (
            <article>
                <h1>Location List</h1>
                <h3>Nashville North</h3>
                <section>123 Easy St.</section>
                <section>Nashville, TN 37130</section>
                <h3>Nashville South</h3>
                <section>321 Hard St.</section>
                <section>Nashville, TN 37130</section>
            </article>
        );
    }
}