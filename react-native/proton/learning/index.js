import React, { Component } from 'react'; // import from react

import { render, Window, App, Area, Box, Button, TextInput, Checkbox, ColorButton, Form, Grid, Dialog } from 'proton-native';

class Example extends Component {
    render() { // all Components must have a render method
	return (
	    <App> // you must always include App around everything
              <Window title="Proton Native Rocks!" size={{w: 500, h: 500}} menuBar={false}>
		<Box>
		  <Button>Hello</Button>
		  <TextInput />
		  <Checkbox>This is a checkbox</Checkbox>
		  <ColorButton />
		  <Form>
		    <TextInput label="Username" />
		    <TextInput label="Password" secure={true} />
		  </Form>
		  <Grid padded={true}>
		    <Button row={0} column={0}
			    onClick={() => Dialog('Message', {title: 'Hello!' })}>
		      Hello
		    </Button>
		    <TextInput row={0} column={1}>
		      Hi
		    </TextInput>
		  </Grid>
		</Box>
              </Window>
	    </App>
	);
    }
}

render(<Example />); // and finally render your main component
