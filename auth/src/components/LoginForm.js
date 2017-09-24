import React, {Component} from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection, Input} from './common';


/*
Handling Text inputs is a bit of a pain in react Native
we are first gonn implement a text input inside of the LoginForm
then refactor it and put it into a separate component

1) By Default, text inputs do not have a set height and width, they behave just
like the image tags
*/
class LoginForm extends Component{
  state = {email:''}

  render(){
    return(
      <Card>
        <CardSection>
          <Input
            placeholder={'user@gmail.com'}
            label={'Email'}
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />

        </CardSection>
        <CardSection>
        </CardSection>
        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;
