import React from 'react';

export default class Services extends React.Component {

    render() {
        const { services } = this.props

        return (
            <>
                <h2>Services</h2>
                <p>I provide some of service:</p>
                {<ul>
                    {
                        services.map((element, index) => {
                            return <li key={index}>{element}</li>
                        })
                    }
                </ul>}
            </>
        )
    }
}
