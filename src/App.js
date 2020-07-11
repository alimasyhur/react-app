import React from 'react';
import { BrowserRouter }  from 'react-router-dom';
import Navbar from './components/navbar/';
import Layout from './components/Layout';
import Routes from './Routes';

class App extends React.Component {
  render() {
    const services = [
      'Building Company Website',
      'Building Personal Website',
      'Building REST API with Laravel, Nodejs and Golang',
      'Software Architect',
      'DevOps Lead Engineer',
    ];

    const about = {
      name: 'Ali Masyhur',
      github: 'github.com/alimasyhur',
      company: 'Keller Williams Realty Inc',
      sex: 'Male',
      roles: ['Backend Engineer', 'Frontend Engineer', 'Fullstack Engineer'],
      skills: ['React', 'Nodejs', 'Typescript', 'Laravel', 'Golang']
    }
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Navbar />
            <Routes services={services} about={about} />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
