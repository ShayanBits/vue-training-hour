import { faker } from '@faker-js/faker';


export const cats = () => {
  let list = []
  for(let i=0; i<20; i++){
    list.push({
      name: faker.person.firstName(),
      jobTitle: faker.person.jobTitle(),
      avatar: faker.image.avatarGitHub()
    })
  }
  return list
}

