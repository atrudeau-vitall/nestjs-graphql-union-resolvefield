import {
  createUnionType,
  Field,
  InputType,
  Int,
  ObjectType,
} from "@nestjs/graphql";

@ObjectType({ description: "Team" })
@InputType("TeamInput")
@InputType("String")
export class Team {
  @Field(() => Int)
  id: number;

  @Field({ nullable: false })
  name: string;

  @Field() createdAt: Date;

  @Field() updatedAt: Date;
}

@InputType()
export class TeamInput {
  @Field({ nullable: false })
  name: string;
}

@ObjectType({ description: "Person" })
@InputType("PersonInput")
@InputType("String")
export class Person {
  @Field(() => Int)
  id: number;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  birthday: Date;
}

@ObjectType({ description: "Place" })
@InputType("PlaceInput")
@InputType("String")
export class Place {
  @Field(() => Int)
  id: number;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  address: string;
}

export const MyUnion = createUnionType({
  name: "MyUnion",
  types: () => [Person, Place] as const,
  resolveType: (member) => {
    if (member.birthday) {
      return Person;
    }
    if (member.address) {
      return Place;
    }
  },
});
