import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import classes from "./ProductTabs.module.scss";
import TabContent from "./TabContent";
import videos from "../../../../data/videoData";
import albums from "../../../../data/albumData";

const ProductTabs = () => {
  return (
    <Tabs className={classes.container}>
      <TabList className={classes.tab__list}>
        <Tab selectedClassName={classes.active} className={classes.tab__item}>
          Music Videos
        </Tab>
        <Tab selectedClassName={classes.active} className={classes.tab__item}>
          Albums
        </Tab>
      </TabList>

      <div className={classes.tab__panel__container}>
        <TabPanel>
          <TabContent videos={videos} />
        </TabPanel>
        <TabPanel>
          <TabContent albums={albums} />
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default ProductTabs;
