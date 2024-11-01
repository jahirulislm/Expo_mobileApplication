import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ReusableText from "../reusable_comps/Reusable_text";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import reusable_styles from "../reusable_comps/reusable_style";
import Hotel_Card from "../Tiles/Hotel/Hotel_Card";

const BestHotels = () => {
  const navigation = useNavigation();
  const hotels = [
    {
      hotel_id: 1,
      chain_id: 421,
      chain_name: "Samed Resorts Group",
      brand_id: 0,
      brand_name: "",
      hotel_name: "Sai Kaew Beach Resort",
      hotel_formerly_name: "",
      hotel_translated_name: "Sai Kaew Beach Resort",
      addressline1: "8/1 Moo 4 Tumbon Phe Muang",
      addressline2: "",
      zipcode: "21160",
      city: "Koh Samet",
      state: "Rayong",
      country: "Thailand",
      countryisocode: "TH",
      star_rating: 4,
      longitude: 101.466979,
      latitude: 12.568135,
      url: "https://www.agoda.com/partners/partnersearch.aspx?hid=1",
      checkin: "2:00 PM",
      checkout: "11:30 AM",
      numberrooms: 160,
      numberfloors: null,
      yearopened: 2000,
      yearrenovated: 2018,
      photo1:
        "http://pix2.agoda.net/hotelimages/1/-1/0ff4876f93688b8adcbed487b5a2175d.jpg?s=312x",
      photo2:
        "http://pix1.agoda.net/hotelimages/1/-1/d821f80943f96ebda33f5a019fa94df4.jpg?s=312x",
      photo3:
        "http://pix4.agoda.net/hotelimages/1/-1/59241704e99027895aa6293d734c9fb1.jpg?s=312x",
      photo4:
        "http://pix5.agoda.net/hotelimages/1/-1/fce5d70fac02fcb7aa25f31dd25850a8.jpg?s=312x",
      photo5:
        "http://pix1.agoda.net/hotelimages/1/-1/7952a908de348304417552246f9039de.jpg?s=312x",
      overview:
        "The 4-star Sai Kaew Beach Resort offers comfort and convenience whether you're on business or holiday in Koh Samet. The property features a wide range of facilities to make your stay a pleasant experience. Free Wi-Fi in all rooms, daily housekeeping, gift/souvenir shop, 24-hour front desk, Wi-Fi in public areas are just some of the facilities on offer. Some of the well-appointed guestrooms feature slippers, separate living room, television LCD/plasma screen, mirror, internet access – wireless. Take a break from a long day and make use of fitness center, sauna, outdoor pool, spa, massage. No matter what your reasons are for visiting Koh Samet, Sai Kaew Beach Resort will make you feel instantly at home.",
      rates_from: 166,
      continent_id: 2,
      continent_name: "Asia",
      city_id: 17222,
      country_id: 106,
      number_of_reviews: 3439,
      rating_average: 8.2,
      rates_currency: "USD",
    },
    {
      hotel_id: 6,
      chain_id: 0,
      chain_name: "No chain",
      brand_id: 0,
      brand_name: "",
      hotel_name: "Marine Hotel",
      hotel_formerly_name: "",
      hotel_translated_name: "Marine Hotel",
      addressline1: "Sutton Cross",
      addressline2: "",
      zipcode: "D13",
      city: "Dublin",
      state: "",
      country: "Ireland",
      countryisocode: "IE",
      star_rating: 3,
      longitude: -6.11034,
      latitude: 53.38884,
      url: "https://www.agoda.com/partners/partnersearch.aspx?hid=6",
      checkin: "3:00 PM",
      checkout: "12:00 PM",
      numberrooms: null,
      numberfloors: null,
      yearopened: null,
      yearrenovated: null,
      photo1:
        "http://pix4.agoda.net/hotelimages/6/6/6_1112201742005261861.jpg?s=312x",
      photo2:
        "http://pix2.agoda.net/hotelimages/6/6/6_1201211018006071850.jpg?s=312x",
      photo3:
        "http://pix5.agoda.net/hotelimages/6/6/6_0905131455001101926.jpg?s=312x",
      photo4:
        "http://pix1.agoda.net/hotelimages/6/6/6_0905131455001101927.jpg?s=312x",
      photo5:
        "http://pix4.agoda.net/hotelimages/6/6/6_0905131455001101930.jpg?s=312x",
      overview:
        "Marine Hotel is perfectly located for both business and leisure guests in Dublin. The hotel offers guests a range of services and amenities designed to provide comfort and convenience. Free Wi-Fi in all rooms, 24-hour front desk, luggage storage, car park, room service are just some of the facilities on offer. Comfortable guestrooms ensure a good night's sleep with some rooms featuring facilities such as heating, telephone, television, satellite/cable TV, shower. Entertain the hotel's recreational facilities, including sauna, golf course (within 3 km), indoor pool, garden. No matter what your reasons are for visiting Dublin, Marine Hotel will make you feel instantly at home.",
      rates_from: 144,
      continent_id: 4,
      continent_name: "Europe",
      city_id: 1131,
      country_id: 188,
      number_of_reviews: 12,
      rating_average: 7.4,
      rates_currency: "USD",
    },

    {
      hotel_id: 1,
      chain_id: 421,
      chain_name: "Samed Resorts Group",
      brand_id: 0,
      brand_name: "",
      hotel_name: "Sai Kaew Beach Resort",
      hotel_formerly_name: "",
      hotel_translated_name: "Sai Kaew Beach Resort",
      addressline1: "8/1 Moo 4 Tumbon Phe Muang",
      addressline2: "",
      zipcode: "21160",
      city: "Koh Samet",
      state: "Rayong",
      country: "Thailand",
      countryisocode: "TH",
      star_rating: 4,
      longitude: 101.466979,
      latitude: 12.568135,
      url: "https://www.agoda.com/partners/partnersearch.aspx?hid=1",
      checkin: "2:00 PM",
      checkout: "11:30 AM",
      numberrooms: 160,
      numberfloors: null,
      yearopened: 2000,
      yearrenovated: 2018,
      photo1:
        "http://pix2.agoda.net/hotelimages/1/-1/0ff4876f93688b8adcbed487b5a2175d.jpg?s=312x",
      photo2:
        "http://pix1.agoda.net/hotelimages/1/-1/d821f80943f96ebda33f5a019fa94df4.jpg?s=312x",
      photo3:
        "http://pix4.agoda.net/hotelimages/1/-1/59241704e99027895aa6293d734c9fb1.jpg?s=312x",
      photo4:
        "http://pix5.agoda.net/hotelimages/1/-1/fce5d70fac02fcb7aa25f31dd25850a8.jpg?s=312x",
      photo5:
        "http://pix1.agoda.net/hotelimages/1/-1/7952a908de348304417552246f9039de.jpg?s=312x",
      overview:
        "The 4-star Sai Kaew Beach Resort offers comfort and convenience whether you're on business or holiday in Koh Samet. The property features a wide range of facilities to make your stay a pleasant experience. Free Wi-Fi in all rooms, daily housekeeping, gift/souvenir shop, 24-hour front desk, Wi-Fi in public areas are just some of the facilities on offer. Some of the well-appointed guestrooms feature slippers, separate living room, television LCD/plasma screen, mirror, internet access – wireless. Take a break from a long day and make use of fitness center, sauna, outdoor pool, spa, massage. No matter what your reasons are for visiting Koh Samet, Sai Kaew Beach Resort will make you feel instantly at home.",
      rates_from: 166,
      continent_id: 2,
      continent_name: "Asia",
      city_id: 17222,
      country_id: 106,
      number_of_reviews: 3439,
      rating_average: 8.2,
      rates_currency: "USD",
    },
    {
      hotel_id: 6,
      chain_id: 0,
      chain_name: "No chain",
      brand_id: 0,
      brand_name: "",
      hotel_name: "Marine Hotel",
      hotel_formerly_name: "",
      hotel_translated_name: "Marine Hotel",
      addressline1: "Sutton Cross",
      addressline2: "",
      zipcode: "D13",
      city: "Dublin",
      state: "",
      country: "Ireland",
      countryisocode: "IE",
      star_rating: 3,
      longitude: -6.11034,
      latitude: 53.38884,
      url: "https://www.agoda.com/partners/partnersearch.aspx?hid=6",
      checkin: "3:00 PM",
      checkout: "12:00 PM",
      numberrooms: null,
      numberfloors: null,
      yearopened: null,
      yearrenovated: null,
      photo1:
        "http://pix4.agoda.net/hotelimages/6/6/6_1112201742005261861.jpg?s=312x",
      photo2:
        "http://pix2.agoda.net/hotelimages/6/6/6_1201211018006071850.jpg?s=312x",
      photo3:
        "http://pix5.agoda.net/hotelimages/6/6/6_0905131455001101926.jpg?s=312x",
      photo4:
        "http://pix1.agoda.net/hotelimages/6/6/6_0905131455001101927.jpg?s=312x",
      photo5:
        "http://pix4.agoda.net/hotelimages/6/6/6_0905131455001101930.jpg?s=312x",
      overview:
        "Marine Hotel is perfectly located for both business and leisure guests in Dublin. The hotel offers guests a range of services and amenities designed to provide comfort and convenience. Free Wi-Fi in all rooms, 24-hour front desk, luggage storage, car park, room service are just some of the facilities on offer. Comfortable guestrooms ensure a good night's sleep with some rooms featuring facilities such as heating, telephone, television, satellite/cable TV, shower. Entertain the hotel's recreational facilities, including sauna, golf course (within 3 km), indoor pool, garden. No matter what your reasons are for visiting Dublin, Marine Hotel will make you feel instantly at home.",
      rates_from: 144,
      continent_id: 4,
      continent_name: "Europe",
      city_id: 1131,
      country_id: 188,
      number_of_reviews: 12,
      rating_average: 7.4,
      rates_currency: "USD",
    },
    {
      hotel_id: 10,
      chain_id: 29,
      chain_name: "Melia Hotels International",
      brand_id: 128,
      brand_name: "Tryp",
      hotel_name: "TRYP Malaga Alameda Hotel",
      hotel_formerly_name: "",
      hotel_translated_name: "TRYP Malaga Alameda Hotel",
      addressline1: "Avenida de la Aurora CC.Larios Centro S/N",
      addressline2: "",
      zipcode: "29002",
      city: "Malaga",
      state: "Andalusia",
      country: "Spain",
      countryisocode: "ES",
      star_rating: 4,
      longitude: -4.432833,
      latitude: 36.716057,
      url: "https://www.agoda.com/partners/partnersearch.aspx?hid=10",
      checkin: "1:00 PM",
      checkout: "12:00 PM",
      numberrooms: 132,
      numberfloors: null,
      yearopened: null,
      yearrenovated: null,
      photo1:
        "http://pix1.agoda.net/hotelimages/4890100/0/bbdf04328f691e68828c8f49075ace5e.jpg?s=312x",
      photo2:
        "http://pix2.agoda.net/hotelimages/10/10/10_14041821020019130452.jpg?s=312x",
      photo3:
        "http://pix5.agoda.net/hotelimages/10/10/10_13051721000012487062.jpg?s=312x",
      photo4:
        "http://pix5.agoda.net/hotelimages/10/10/10_13051721000012487063.jpg?s=312x",
      photo5:
        "http://pix2.agoda.net/hotelimages/10/10/10_13051721010012487064.jpg?s=312x",
      overview:
        "TRYP Málaga Alameda Hotel is perfectly located for both business and leisure guests in Malaga. The hotel has everything you need for a comfortable stay. To be found at the hotel are 24-hour room service, free Wi-Fi in all rooms, 24-hour front desk, facilities for disabled guests, Wi-Fi in public areas. Each guestroom is elegantly furnished and equipped with handy amenities. The hotel's peaceful atmosphere extends to its recreational facilities which include fitness center, sauna. TRYP Málaga Alameda Hotel combines warm hospitality with a lovely ambiance to make your stay in Malaga unforgettable.",
      rates_from: 83,
      continent_id: 4,
      continent_name: "Europe",
      city_id: 12521,
      country_id: 167,
      number_of_reviews: 21,
      rating_average: 7.5,
      rates_currency: "USD",
    },
    {
      hotel_id: 13,
      chain_id: 227,
      chain_name: "NH Hotels",
      brand_id: 451,
      brand_name: "NH Hotels",
      hotel_name: "NH Iquique Hotel",
      hotel_formerly_name: "Radisson Hotel Iquique",
      hotel_translated_name: "NH Iquique Hotel",
      addressline1: "Av Costanera 3939",
      addressline2: "",
      zipcode: "1111500",
      city: "Iquique",
      state: "Tarapacá",
      country: "Chile",
      countryisocode: "CL",
      star_rating: 4,
      longitude: -70.129991,
      latitude: -20.269986,
      url: "https://www.agoda.com/partners/partnersearch.aspx?hid=13",
      checkin: "3:00 PM",
      checkout: "12:00 PM",
      numberrooms: null,
      numberfloors: null,
      yearopened: null,
      yearrenovated: null,
      photo1:
        "http://pix3.agoda.net/hotelimages/13/0/5f8b6d43a6a287d37bfe1626ab22b0b1.jpg?s=312x",
      photo2:
        "http://pix4.agoda.net/hotelimages/13/13/13_15072020190032641184.jpg?s=312x",
      photo3:
        "http://pix5.agoda.net/hotelimages/13/13/13_15072020200032641185.jpg?s=312x",
      photo4:
        "http://pix1.agoda.net/hotelimages/13/13/13_15072020200032641186.jpg?s=312x",
      photo5:
        "http://pix2.agoda.net/hotelimages/13/0/ff8100c85955522a0289e5c71329a17a.jpg?s=312x",
      overview:
        "NH Iquique Hotel is perfectly located for both business and leisure guests in Iquique. The hotel offers guests a range of services and amenities designed to provide comfort and convenience. All the necessary facilities, including 24-hour front desk, facilities for disabled guests, Wi-Fi in public areas, car park, room service, are at hand. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like television LCD/plasma screen, separate living room, air conditioning, heating, wake-up service. To enhance guests' stay, the hotel offers recreational facilities such as fitness center, outdoor pool. A welcoming atmosphere and excellent service are what you can expect during your stay at NH Iquique Hotel.",
      rates_from: 66,
      continent_id: 8,
      continent_name: "South America",
      city_id: 3527,
      country_id: 69,
      number_of_reviews: 5,
      rating_average: 5.9,
      rates_currency: "USD",
    },
    {
      hotel_id: 15,
      chain_id: 21,
      chain_name: "Marriott",
      brand_id: 3821,
      brand_name: "Sheraton",
      hotel_name: "Sheraton Grand Hotel & Spa, Edinburgh",
      hotel_formerly_name: "Sheraton Grand Hotel and Spa Edinburgh",
      hotel_translated_name: "Sheraton Grand Hotel & Spa, Edinburgh",
      addressline1: "1 Festival Square",
      addressline2: "",
      zipcode: "EH39SR",
      city: "Edinburgh",
      state: "Scotland",
      country: "United Kingdom",
      countryisocode: "GB",
      star_rating: 5,
      longitude: -3.207612,
      latitude: 55.947063,
      url: "https://www.agoda.com/partners/partnersearch.aspx?hid=15",
      checkin: "3:00 PM",
      checkout: "12:00 PM",
      numberrooms: 269,
      numberfloors: null,
      yearopened: null,
      yearrenovated: null,
      photo1:
        "http://pix3.agoda.net/hotelimages/15/0/59a863c3a6e93b759faf2beea910d516.jpg?s=312x",
      photo2:
        "http://pix5.agoda.net/hotelimages/15/15/15_13072409510013984463.jpg?s=312x",
      photo3:
        "http://pix2.agoda.net/hotelimages/15/15/15_17091312040056285473.jpg?s=312x",
      photo4:
        "http://pix4.agoda.net/hotelimages/15/15/15_17091312040056285476.jpg?s=312x",
      photo5:
        "http://pix5.agoda.net/hotelimages/15/15/15_17091312040056285477.jpg?s=312x",
      overview:
        "Sheraton Grand Hotel & Spa, Edinburgh is perfectly located for both business and leisure guests in Edinburgh. The hotel has everything you need for a comfortable stay. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, fireplace are there for guest's enjoyment. Each guestroom is elegantly furnished and equipped with handy amenities. The hotel offers various recreational opportunities. Sheraton Grand Hotel & Spa, Edinburgh is an excellent choice from which to explore Edinburgh or to simply relax and rejuvenate.",
      rates_from: 185,
      continent_id: 4,
      continent_name: "Europe",
      city_id: 18924,
      country_id: 107,
      number_of_reviews: 35,
      rating_average: 8.8,
      rates_currency: "USD",
    },
  ];
  return (
    <View>
      <View
        style={[
          reusable_styles.rowWithSpace("space-between"),
          { paddingBottom: 20 },
        ]}
      >
        <ReusableText
          text={"Nearby Hotels"}
          size={22}
          family={"medium"}
          color="black"
        />
        <TouchableOpacity onPress={() => navigation.navigate("HotelList")}>
          <Feather name="list" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={hotels}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.hotel_id}
        contentContainerStyle={{ columnGap: 10 }}
        renderItem={({ item }) => {
          <Hotel_Card
            item={item}
            margin={10}
            onPress={() => navigation.navigate("HotelDetails")}
          />;
        }}
      />
    </View>
  );
};

export default BestHotels;

const styles = StyleSheet.create({});
