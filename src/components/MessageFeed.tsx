import * as React from 'react';
import { fetchMessages, Message } from '../client';
import { Segment, Image, Comment, Header } from 'semantic-ui-react';
import { render } from 'react-dom';

interface MessageFeedProps {
    channelName: string;
    shouldReload: boolean;
    setShouldReload: (shouldReload: boolean) => void;
}

interface MessageFeedState {
    messages: Message[];
}

export class MessageFeed extends React.Component<MessageFeedProps, MessageFeedState> {
    constructor(props: MessageFeedProps) {
        super(props);
        this.state = {
            messages: []
        };
    }
    
    public componentDidMount() {
        this.fetchMessages(this.props.channelName);
    }

    private fetchMessages = (channelName: string) => {
        if(this.props.shouldReload)
            this.props.setShouldReload(false);
        fetchMessages(channelName).then(response => {
            this.setState({ messages: response.data.messages });
        })
        .catch(err => {
            console.log(err);
        });
    }

    public componentDidUpdate(prevProps: MessageFeedProps) {
        if (prevProps.channelName !== this.props.channelName ||
            !prevProps.shouldReload && this.props.shouldReload) {
            this.fetchMessages(this.props.channelName);
        }
    }

    public render() {
        return (
            <Comment.Group>
                <Header as='h3' dividing>{this.props.channelName}</Header>
                {this.state.messages.slice().reverse().map(message=>
                    <Comment key={message.id}>
                        <Comment.Avatar src={message.user.avatar || '/img/avatar.png'} />
                        <Comment.Content>
                            <Comment.Author as='a'>{message.user.name}</Comment.Author>
                            <Comment.Metadata>
                                <div>{message.date}</div>
                            </Comment.Metadata>
                            <Comment.Text>
                                {message.body}
                            </Comment.Text>
                        </Comment.Content>
                    </Comment>
                )}
            </Comment.Group>
        );
    }
}
