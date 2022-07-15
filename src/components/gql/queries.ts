import { gql } from "@apollo/client";

export const GETCURRENTUSER = gql`
  query {
    getSignedInUser {
      id
      firstname
      lastname
      role
      email
    }
  }
`;

export const GETTICKETS = gql`
query($data: TicketFiltersInput!){
  getTickets(data:$data){
      id
      name
      project{
          id
      }
      userTicket{
          role
      }
  }
}
`;

export const GETTICKETBYID = gql`
query ($id: ID!) {
	getTicket(id: $id) {
		id
		name
        comments{
            author{
                firstname
            }
            content
        }
		userTicket {
			role
			user {
				firstname
			}
		}
		project {
			name
		}
        pictures{
            contentUrl
        }
	}
}
`;

export const GETPROJECTBYID = gql`
query ($id: ID!) {
	getProject(id: $id) {
		id
        timeEstimation
        timeSpent
		userProject {
			role
			user {
				id
				firstname
			}
		}
		tickets {
			id
			name
			userTicket {
				user {
					firstname
				}
			}
		}
	}
}
`;

