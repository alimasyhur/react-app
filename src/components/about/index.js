import React from 'react';

export default class About extends React.Component {

    render() {
        const { about } = this.props

        return (
          <>
            <h2>About Me</h2>
            <h3>Love to Learn Cutting Edge Technology</h3>
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>{about.name}</td>
                </tr>
                <tr>
                  <td>Github</td>
                  <td>:</td>
                  <td>{about.github}</td>
                </tr>
                <tr>
                  <td>Company</td>
                  <td>:</td>
                  <td>{about.company}</td>
                </tr>
                <tr>
                  <td>Sex</td>
                  <td>:</td>
                  <td>{about.sex}</td>
                </tr>
                <tr>
                  <td>Roles</td>
                  <td>:</td>
                  <td>{about.roles.join(", ")}</td>
                </tr>
                <tr>
                  <td>Skills</td>
                  <td>:</td>
                  <td>{about.skills.join(", ")}</td>
                </tr>
              </tbody>
            </table>
          </>
        );
    }
}
