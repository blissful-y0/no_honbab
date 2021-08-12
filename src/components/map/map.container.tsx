import React, { useState } from "react";
import MapUI from "./map.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_MEETINGS } from "./map.query";
import {
  IQuery,
  IQueryFetchMeetingsArgs,
} from "../../commons/types/generated/types";

function Map() {
  const { data } = useQuery<IQuery, IQueryFetchMeetingsArgs>(FETCH_MEETINGS);
  const [initialRegion, setInitialRegion] = useState({
    latitude: 37.498095,
    longtitude: 127.02761,
  });

  return <MapUI initialRegion={initialRegion} data={data} />;
}

export default Map;
