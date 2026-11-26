import React from 'react';
import Header from './Header';
import Content from './Content';

const TaskLogging: React.FC = () =>{
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <section>
            <Header title='Registro de tareas'/>
            <Content/>
          </section>
            <Header title='Perfil'/>
            <Header title='Preferencias'/>
            <Header title='Chat'/>

        </div>
      </div>
    );
};

export default TaskLogging;
