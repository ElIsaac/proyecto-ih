import React from 'react'
import { Statistic, Card } from 'semantic-ui-react'

const TotalInfo = ({cart}) => {
    const calculateTotal = () => {
        let sum = 0;
        cart.forEach(item => {
          sum += item.total;
        });
        return sum;
      };
    return (
        <div>
                <Card fluid color='green'  >
                    
                    <Card.Content>
                    <Statistic>
                        <Statistic.Value>
                        {calculateTotal()}
                        </Statistic.Value>
                        <Statistic.Label>Total</Statistic.Label>
                    </Statistic>
                    </Card.Content>
                    
                </Card>

        </div>
    )
}

export default TotalInfo
