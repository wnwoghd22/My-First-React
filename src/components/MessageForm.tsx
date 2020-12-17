import * as React from 'react';
import { postMessage, Message } from '../client';
import { Botton, Form, Segment, TextArea } from 'semantic-ui-react';

interface MessageFormProps {
    channelName: string;
}
interface MessageFormState {
    body?: string;
}

export class MessageForm extends React.Component<MessageFormProps, MessageFormState> {
    constructor (props: MessageFormProps) {
        super(props);
        this.state = {
            body: ' '
        }
    }
}