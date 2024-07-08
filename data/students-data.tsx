import { faker } from "@faker-js/faker";

export interface Student {
  id: number;
  progress: number;
  name: string;
  classroom: string;
  group: string;
  avatar: string;
  absences: number;
  status: string;
}

export const fakeStudentsData: Student[] = Array.from(
  { length: 15 },
  (_, i) => ({
    id: i + 1,
    progress: faker.number.int({ min: 0, max: 100 }),
    name: faker.person.fullName(),
    classroom: faker.helpers.arrayElement(["1", "2", "3"]),
    group: faker.helpers.arrayElement(["A", "B", "C"]),
    avatar: faker.image.avatar(),
    absences: faker.number.int({ min: 0, max: 50 }),
    status: faker.helpers.arrayElement(["Presente", "Faltou"]),
  })
);
