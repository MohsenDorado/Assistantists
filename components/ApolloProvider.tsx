"use client"

import { client } from "@/graphql/apolloclient";
import { ApolloProvider } from "@apollo/client"

const AppoloProviderWrapper=({children}:{children:React.ReactNode})=>{
    return <ApolloProvider client={client}> {children}</ApolloProvider>


}
    export default AppoloProviderWrapper;