import React, { useState, useEffect } from "react";

const Reloj: React.FC = () =>{
    const [hora, setHora] = useState(new Date());
    const [instantes, setInstantes] = useState<Date[]>([]);

    const guardarInstante = () =>{
        const nuevoInstante = new Date();
        setInstantes([...instantes, nuevoInstante]);
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            const now = new Date();
            setHora(now);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return(
        <div>
            <p>{hora.getHours()}:{hora.getMinutes()}:{hora.getSeconds()}</p>
            <button onClick={guardarInstante}>Guardar instante</button>
            <h2>Instantes guardados</h2>
            <ul>
                {instantes.map((instante) => (
                    <li key={instante.getTime()}>
                        {instante.toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reloj;