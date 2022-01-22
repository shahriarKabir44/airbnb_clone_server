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

let house=new House()
let booking=new Booking()
let user=new User()

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        _id: { type: GraphQLID },
        email: { type: GraphQLString },
        getOwned: {
            type: new GraphQLList(HouseType),
            resolve(parent, args) {
                return house.findMany({ owner: parent._id })
            }
        },
        getReserved:{
            type: new GraphQLList(ReservationType),
            resolve(parent, args){
                return booking.getBookings({userId: parent._id})
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
        town:{ type: GraphQLString },
        title: { type: GraphQLString },
        price: { type: GraphQLString },
        description: { type: GraphQLString },
        ownerId:{ type: GraphQLID},

        
    })
});

const ReservationType=new GraphQLObjectType({
    name:'reservation',
    fields:()=>({
        _id: { type: GraphQLID },
        locationId:{ type: GraphQLID },
        startDate:{ type: GraphQLString },
        endDate:{ type: GraphQLString },
        userId:{ type: GraphQLID },
        status:{ type: GraphQLString },
        cost:{ type: GraphQLString },
        time:{ type: GraphQLString },
        getLocationInfo:{
            type: HouseType,
            resolve(parent,args){
                return house.findOne({_id: parent.locationId })
            }
        },
        getUserInfo:{
            type: UserType,
            resolve(parent,args){
                return user.findOne({_id: parent.userId })
            }
        }
    })
})

const RootQueryType=new GraphQLObjectType({
    name:'rootQuery',
    fields:{
        User:{
            type: UserType,
            args:{
                id: {type: GraphQLID}
            },
            resolve(parent,args,context){
              //  return user.findOne({_id: context.user._id})
              return user.findOne({_id: args.id})
            }
        }
    }
})

module.exports= new GraphQLSchema({
    query: RootQueryType 
    
});
