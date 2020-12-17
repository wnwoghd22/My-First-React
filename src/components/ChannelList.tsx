import * as React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';

export class ChannelList extends React.Component<{}, {}> {

    public render() {

    const channels = ['general', 'random'];

        return (
            <Menu inverted vertical fixed={'left'}>
                <Menu.Item as={Link} to={'/'} >
                    Home
                    <Icon name = 'home'/>
                </Menu.Item>
                <Menu.Item>
                Channels
                <Menu.Menu>
                    {channels.map(channel =>  
                        <Menu.Item
                            key={channel}
                            as ={NavLink}
                            to ={{pathname: `/channels/${channel}`}}>
                        {channel}
                        </Menu.Item>
                    )}
                </Menu.Menu>
                </Menu.Item>
            </Menu>
        );
    }
}