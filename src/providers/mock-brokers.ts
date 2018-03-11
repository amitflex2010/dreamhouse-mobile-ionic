let brokers: Array<any> = [
    {
        id: 1,
        name: "Caroline Kingsley",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "caroline@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg",
        property: {
            id: 12,
            address: "145 Commonwealth ave",
            city: "Boston",
            state: "MA",
            zip: "02420",
            price: "$845,000",
            title: "Contemporary Luxury",
            bedrooms: 4,
            bathrooms: 3,
            lat: 42.352466,
            long: -71.075311,
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house12.jpg",
            thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house12sq.jpg",
            tags: "colonial",
            description: "Lorem ipsum dolor sit amet"
        }
    },
    {
        id: 2,
        name: "Michael Jones",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "michael@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg",
        property:
        {
            id: 11,
            address: "95 Gloucester st",
            city: "Boston",
            state: "MA",
            zip: "02420",
            price: "$690,000",
            title: "Architectural Details",
            bedrooms: 3,
            bathrooms: 3,
            lat: 42.349693,
            long: -71.084407,
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house11.jpg",
            thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house11sq.jpg",
            tags: "contemporary",
            description: "Lorem ipsum dolor sit amet"
        }
    },
    {
        id: 3,
        name: "Jonathan Bradley",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "jonathan@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jonathan_bradley.jpg",
        property: 
        {
            id: 10,
            address: "503 Park Drive",
            city: "Boston",
            state: "MA",
            zip: "02420",
            price: "$650,000",
            title: "City Living",
            bedrooms: 2,
            bathrooms: 2,
            long: -71.105475,
            lat: 42.347400,
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house08.jpg",
            thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house08sq.jpg",
            tags: "contemporary",
            description: "Lorem ipsum dolor sit amet"
        }
    },
    {
        id: 4,
        name: "Jennifer Wu",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "jen@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg",
        property: 
        {
            id: 9,
            address: "121 Harborwalk",
            city: "Boston",
            state: "MA",
            zip: "02420",
            price: "$450,000",
            title: "Seaport District Retreat",
            bedrooms: 3,
            bathrooms: 3,
            long: -71.049327,
            lat: 42.35695,
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house09.jpg",
            thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house09sq.jpg",
            tags: "contemporary",
            description: "Lorem ipsum dolor sit amet"
        }

    },
    {
        id: 5,
        name: "Olivia Green",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "olivia@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/olivia_green.jpg",
        property: 
        {
            id: 8,
            address: "48 Brattle st",
            city: "Cambridge",
            state: "MA",
            zip: "02420",
            price: "$450,000",
            title: "Heart of Harvard Square",
            bedrooms: 5,
            bathrooms: 4,
            long: -71.121653,
            lat: 42.374117,
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house10.jpg",
            thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house10sq.jpg",
            tags: "victorian",
            description: "Lorem ipsum dolor sit amet"
        }
    },
    {
        id: 6,
        name: "Miriam Aupont",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "miriam@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/miriam_aupont.jpg",
        property: 
        {
            id: 7,
            address: "127 Endicott st",
            city: "Boston",
            state: "MA",
            zip: "02420",
            price: "$450,000",
            title: "City Living",
            bedrooms: 3,
            bathrooms: 1,
            long: -71.057352,
            lat: 42.365003,
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house07.jpg",
            thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house07sq.jpg",
            tags: "colonial",
            description: "Lorem ipsum dolor sit amet"
        }
    },
    {
        id: 7,
        name: "Michelle Lambert",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "michelle@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michelle_lambert.jpg",
        property:
        {
            id: 6,
            address: "448 Hanover st",
            city: "Boston",
            state: "MA",
            zip: "02420",
            price: "$725,000",
            title: "Quiet Retreat",
            bedrooms: 4,
            bathrooms: 2,
            long: -71.052617,
            lat: 42.366855,
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house06.jpg",
            thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house06sq.jpg",
            tags: "colonial",
            description: "Lorem ipsum dolor sit amet"
        }
    },
    {
        id: 8,
        name: "Victor Ochoa",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "victor@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/victor_ochoa.jpg",
        property:
        {
            id: 5,
            address: "211 Charles Street",
            city: "Boston",
            state: "MA",
            zip: "02420",
            price: "$850,000",
            title: "Waterfront in the City",
            bedrooms: 3,
            bathrooms: 2,
            long: -71.084454,
            lat: 42.368168,
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house05.jpg",
            thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house05sq.jpg",
            tags: "contemporary",
            description: "Lorem ipsum dolor sit amet"
        }
    }
];

export default brokers;
