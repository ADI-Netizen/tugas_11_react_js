import React from 'react';
import { Button, Dimmer, Divider, Grid, Header, Icon, Image, Loader, Search, Segment } from 'semantic-ui-react';

function Konten() {
    return (
        <>
            <Segment placeholder style={{ marginTop: '10px' }}>
                <Grid columns={2} stackable textAlign='center'>
                    <Divider vertical>Or</Divider>

                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>
                            <Header icon>
                                <Icon name='search' />
                                Cari Dokumen
                            </Header>
                            <Search placeholder='Search Document...' />
                        </Grid.Column>

                        <Grid.Column>
                            <Header icon>
                                <Icon name='file pdf outline' />
                                Tambah Dokumen Baru
                            </Header>
                            <Button primary>Create Document</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment>
                <Dimmer active>
                    <Loader>Loading</Loader>
                </Dimmer>

                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Segment>
        </>
    )
}

export default Konten;