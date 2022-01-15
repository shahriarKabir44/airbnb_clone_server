const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull

} = graphql;

const User=require('../models/User')

const House=require('../models/House')

const Booking=require('../models/Booking')

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        _id: { type: GraphQLID },
        email: { type: GraphQLString },
        Owned: {
            type: new GraphQLList(HouseType),
            resolve(parent, args) {
                return House.findOne({ owner: parent._id })
            }
        }
    })
});

const HouseType= new GraphQLObjectType({
    name: 'House',
    fields: () => ({
        _id: { type: GraphQLID },
        picture:{ type: GraphQLString },
        type: { type: GraphQLString },
        town:{ type: String },
        title: { type: GraphQLString },
        price: { type: GraphQLString },
        description: { type: GraphQLString },
        ownerId:{ type: GraphQLID},

        
    })
});