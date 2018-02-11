## Geolocation / Geocoding / Geotagging

- Map with user's location
- Geolocate photos on map

Possible ways to capture geolocation data:

1. Display a map with a best guess of a user’s location, and they can adjust their location on that map module. Through Jomsocial with nordmograph plg_geommunityloactor plugin
2. Determine geolocation from address fields in Jomsocial: “Users in Jomsocial can be geolocated by Jomsocial itself if your userprofiles use Address fields and if these are set properly in Jomsocial configuration (Integration tab).”
3. IP-based geolocation.  freegeoip.net has public api to do it based on IP and get back lat/long. IP address location data can include information such as country, region, city, postal/zip code,[3] latitude, longitude and timezone.
4. Photographs – geotag information is embedded with EXIF data

Should have privacy settings to control anywhere user’s location is shown, and allow them to control it. A lot of online services strip EXIF data out when you upload a photo so you’re not exposing your location and other info.

There’s a geocode microformat, for semantic markup of latitude/longitude data.

MySQL has a geo field type and functions, similar to PostgreGIS functionality. Jomsocial’s obviously storing geolocation data, but probably not in a GIS-specific field data type
 MySQL on Brent’s server is 5.5.