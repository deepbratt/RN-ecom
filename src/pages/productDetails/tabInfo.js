import React,{ useState } from 'react';
import { Content, Tab, Tabs, ScrollableTab } from 'native-base';
import { Image, Text, ScrollView } from 'react-native';
import {Col, Grid} from 'react-native-easy-grid';
import Description from './description';
import Specification from './specification';
import ReturnPolicy from './returnPolicy';
import Ratings from './ratings';

import styles from './style';
export default function TabInfo (){
    const [initialPage , setInitialPage] = useState(0);
    return (
        <Content >
            <ScrollView>
            <Grid style={styles.tabcontent}>
              <Col style={styles.tabcolcont}>
                <Tabs renderTabBar={()=> <ScrollableTab />} initialPage={initialPage} locked={false}>
                    <Tab 
                        heading="Description" 
                        key={1} 
                        tabStyle={styles.tabstyle} 
                        textStyle={styles.tabtextstyle} 
                        activeTabStyle={styles.activetabstyle}
                        activeTextStyle={styles.activetextstyle}
                        scrollEnabled={false}
                    >

                            <Description />

                    </Tab>

                    <Tab heading="Specification" 
                        key={2} 
                        tabStyle={styles.tabstyle} 
                        textStyle={styles.tabtextstyle} 
                        activeTabStyle={styles.activetabstyle}
                        activeTextStyle={styles.activetextstyle}
                    >
  
                            <Specification />

                    </Tab>

                    <Tab heading="Return Policy" 
                        key={3} 
                        tabStyle={styles.tabstyle} 
                        textStyle={styles.tabtextstyle} 
                        activeTabStyle={styles.activetabstyle}
                        activeTextStyle={styles.activetextstyle}
                    >
                        <ScrollView style={{ flex: 1 }}>
                            <ReturnPolicy />
                        </ScrollView>
                    </Tab>

                    <Tab heading="Ratings & Reviews" 
                        key={4} 
                        tabStyle={styles.tabstyle} 
                        textStyle={styles.tabtextstyle} 
                        activeTabStyle={styles.activetabstyle}
                        activeTextStyle={styles.activetextstyle}
                    >

                        <ScrollView style={{ flex: 1 }}>
                            <Ratings />
                        </ScrollView>
                    </Tab>    
                </Tabs>
              </Col>
            </Grid>
            </ScrollView>
        </Content>
    );
}