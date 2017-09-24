import React, {Component} from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection} from './common';


/*
Handling Text inputs is a bit of a pain in react Native
we are first gonn implement a text input inside of the LoginForm
then refactor it and put it into a separate component

1) By Default, text inputs do not have a set height and width, they behave just
like the image tags
*/
class LoginForm extends Component{
  state = {text:''}

  render(){
    return(
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={text => this.setState({text})}
            style={{height:20, width:100}}>
          </TextInput>

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
