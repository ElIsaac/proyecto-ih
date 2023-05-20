import React, {useContext, useState} from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { Card, Container, Divider, Header, Icon, Segment, Button } from 'semantic-ui-react'
import { AppContext } from '../../context/AppProvider';
import ShowTickets from '../partials/Stock/ShowTickets';


const Stock = () => {

const [showData, setShowData] = useState(false);
const [tickets, setTickets] = useState([])
const {products} = useContext( AppContext );
const data = products


const handleButtonClick = async () => {
  try {
    const response = await fetch('https://proyecto-ihc.fly.dev/tickets/');
    
    if (!response.ok) {
      throw new Error('Error al obtener los tickets');
    }
    
    const res = await response.json();
    setShowData(true);
    setTickets(res);
  } catch (error) {
    console.log(error);
    // Manejar el error de alguna manera apropiada
  }

};

  return (
    <Container>
      <Divider horizontal></Divider>
        <Header as='h1'>
          <Icon name='chart bar' />
          <Header.Content>
            Stock
            <Header.Subheader>Listado de productos y existencia</Header.Subheader>
          </Header.Content>
        </Header>
        <Divider horizontal></Divider>
      <Card fluid color='blue'>

        <Card.Content>
          
          <Card.Meta>
            <span className='date'>Disponibilidad</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          
          <BarChart
            width={800}
            height={300}
            data={data}
            
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cantidad" barSize={20} fill="#8884d8" />
          </BarChart>
        </Card.Content>
      </Card>
      <Divider horizontal></Divider>
        <Header as='h4' color='white'>
          <Icon name='chart bar' />
          <Header.Content>
            Tickets
            <Header.Subheader>Listado de ventas</Header.Subheader>
          </Header.Content>
        </Header>
        <Divider horizontal></Divider>
        <Segment>
      <h3>Consulta de Datos</h3>
      <p>¿Deseas consultar los datos?</p>
      

      {showData ? <ShowTickets tickets={tickets}/> : <Button onClick={handleButtonClick}>Consultar</Button> }
    </Segment>
    </Container>
  );
};

export default Stock;

