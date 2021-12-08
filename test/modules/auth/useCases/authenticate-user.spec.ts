import { User } from 'src/modules/user/core/domain/user.entity';

export const usersMock: User[] = [
  {
    id: '1',
    name: 'John Doe',
    username: 'johndoe@business.com',
    password: '$2a$10$bUCyHPUQTTXXnuBY2ZM./uphuqxL6ZU3ZkZiMFfWR65zIkM.YrgQa',
    socialMedia: {},
    profilePicture: 'https://randomuser.me/api/portraits/men/83.jpg',
    role: 'user',
  },
  {
    id: '2',
    name: 'Jane Doe',
    username: 'janedoe@business.com',
    password: '$2a$10$ubLIwiDuoaX79Dy4IpnE.emxDVRE.Rlqb4XMKG5Z0oaIXBfpNR.Y.',
    socialMedia: {},
    profilePicture: 'https://randomuser.me/api/portraits/women/32.jpg',
    role: 'user',
  },
  {
    id: '3',
    name: 'John Smith',
    username: '$2a$10$SUFXccU07sOtPVtRj5KUnORZ.JCt34o7yZfxVra741HDSsyx5EACi',
    password: '123456',
    socialMedia: {},
    profilePicture: 'https://randomuser.me/api/portraits/men/78.jpg',
    role: 'user',
  },
];
