import gql from "graphql-tag";
export const GET_TOKEN = gql`
  {
  accountSASToken
  }
`;

export const GET_COST = gql`
{
  costs(referenceFilter: { referenceID: "dapr", referenceType: PROJECTTYPE }) { 
    id 
    costID 
    BKPCosts { 
      BKPID 
      description
      itemQuantity
      bkpCostID
      BKPID
      BKPTitle
      itemPrice
      itemTotalPrice
      bkpCostFiles { 
        bkpCostFileID 
        uploadedFileTitle
        uploadedFileID
      } 
    } 
  } 
  }
`;


export const CREATE_COST = gql`
mutation CreateCost(
  $description: String!,
  $uploadedFileID: String!, 
  $uploadedFileTitle: String!,
  $BKPTitle: String!,
  $BKPID: String!,
  $itemPrice: Float!,
  $itemQuantity: Float!
  ){ 
    createCost( 
      referenceFilter: { referenceID: "dapr", referenceType: PROJECTTYPE } 
      costDetails: { 
        costBasicInfo: { structureID: "1", structureName: "New" } 
        BKPCosts: { 
          bkpCostBasic: { 
            BKPID: $BKPID
            BKPTitle: $BKPTitle
            description: $description
            itemPrice: $itemPrice 
            itemQuantity: $itemQuantity
          } 
          bkpCostFiles: { 
            uploadedFileID: $uploadedFileID
            uploadedFileTitle: $uploadedFileTitle
          } 
        } 
      } 
  
    ) { 
  
      id 
      costID 
      BKPCosts { 
        BKPTitle 
        bkpCostFiles { 
          bkpCostFileID 
          uploadedFileID 

        } 
  
      } 
  
    } 
}`;


