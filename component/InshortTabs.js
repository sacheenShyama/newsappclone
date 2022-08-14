import { View, Text, useWindowDimensions } from "react-native";
import React, { useContext, useState } from "react";
import { SceneMap, TabView } from "react-native-tab-view";
import NewsScreen from "../Screens/NewsScreen";
import DiscoverScreen from "../Screens/DiscoverScreen";
import TopNavigation from "./TopNavigation";
import { NewsContext } from "../API/Context";

const InshortTabs = () => {
  const layout = useWindowDimensions();
  const { index, setIndex } = useContext(NewsContext);

  // const [index, setIndex] = useState(1);

  const [routes, setRoutes] = useState([
    { key: "first", title: "Dioscover" },
    { key: "second", title: "News" },
  ]);

  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
  );
};

export default InshortTabs;
