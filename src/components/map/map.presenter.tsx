import {
  Map,
  MarkView,
  Title,
  TextRowWrapper,
  Heading,
  TimeAndPlace,
  Recruitment,
  TextWrapper,
} from "./map.style";
import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

function MapUI({ initialRegion, data }) {
  const navigation = useNavigation();
  return (
    <Map>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: initialRegion.latitude,
          longitude: initialRegion.longtitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        {data?.fetchMeetings?.map((data, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: data?.latitude,
              longitude: data?.longitude,
            }}
            title={data?.title}
            description={data?.contents}
          >
            <Callout
              onPress={() =>
                navigation.navigate("게시물 읽기", {
                  id: data._id,
                })
              }
            >
              <MarkView>
                <Title>{data?.title}</Title>
                <TextRowWrapper>
                  <Heading>시간 :</Heading>
                  <TimeAndPlace>{data?.date}</TimeAndPlace>
                </TextRowWrapper>
                <TextRowWrapper>
                  <Heading>장소 :</Heading>
                  <TimeAndPlace>{data?.place}</TimeAndPlace>
                </TextRowWrapper>
                <TextRowWrapper>
                  <Heading>모집 인원:</Heading>
                  <TimeAndPlace>
                    {data?.countMember} / {data?.recruitment}
                  </TimeAndPlace>
                </TextRowWrapper>
                <TextWrapper>
                  <Recruitment>
                    {">"}
                    {">"}
                    {">"} 신청하기
                  </Recruitment>
                </TextWrapper>
              </MarkView>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </Map>
  );
}

export default MapUI;
