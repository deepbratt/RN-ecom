import React,{ useState } from 'react';
import { Content, Tab, Tabs, ScrollableTab } from 'native-base';
import { Image, Text, ScrollView } from 'react-native';
import {Col, Grid} from 'react-native-easy-grid';
import Description from './description';
import Items from './items';
import Reviews from './reviews';

import styles from './style';
export default function TabInfo (){
    const [initialPage , setInitialPage] = useState(0);
    return (
        <Content >
            <ScrollView>
            <Grid style={styles.tabcontent}>
              <Col style={styles.tabcolcont}>
                <Tabs initialPage={initialPage} locked={false}>
                    <Tab 
                        heading="About" 
                        key={1} 
                        tabStyle={styles.tabstyle} 
                        textStyle={styles.tabtextstyle} 
                        activeTabStyle={styles.activetabstyle}
                        activeTextStyle={styles.activetextstyle}
                        scrollEnabled={false}
                    >
                        <Description />

                    </Tab>

                    <Tab heading="Items" 
                        key={2} 
                        tabStyle={styles.tabstyle} 
                        textStyle={styles.tabtextstyle} 
                        activeTabStyle={styles.activetabstyle}
                        activeTextStyle={styles.activetextstyle}
                    >
  
                            <Items />

                    </Tab>

                    <Tab heading="Reviews" 
                        key={3} 
                        tabStyle={styles.tabstyle} 
                        textStyle={styles.tabtextstyle} 
                        activeTabStyle={styles.activetabstyle}
                        activeTextStyle={styles.activetextstyle}
                    >
                         <Reviews />
                    </Tab>

                    <Tab heading="Events" 
                        key={4} 
                        tabStyle={styles.tabstyle} 
                        textStyle={styles.tabtextstyle} 
                        activeTabStyle={styles.activetabstyle}
                        activeTextStyle={styles.activetextstyle}
                    >    
                    </Tab> 
                </Tabs>
              </Col>
            </Grid>
            </ScrollView>
        </Content>
    );
}