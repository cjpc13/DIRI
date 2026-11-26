import React from "react";
import './Content.css';
import ActivityItem from "./ActivityItem";

const Content: React.FC = () =>{
    return(
        <div className="content">
            <div className="line"></div>
            <ActivityItem valorAlt="Francisca" nombreImagen="francisca" time="Hace una hora" description="Fui a comer con amigos"/>
            <ActivityItem valorAlt="Paco" nombreImagen="paco" time="10:00 am" description="Leí un artículo sobre tecnología"/>
            <ActivityItem valorAlt="Quica" nombreImagen="quica" time="10:00 am" description="Escribí notas sobre un proyecto importante"/>
            <ActivityItem valorAlt="Curro" nombreImagen="curro" time="2:21 pm" description="Preparé la presentación para la reunión de mañana"/>
        </div>
    );
};

export default Content;