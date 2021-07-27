export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type ICreateMeetingInput = {
  title: Scalars['String'];
  dateLimit: Scalars['Int'];
  date: Scalars['String'];
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
  host: IUserInput;
  recruitment: Scalars['Int'];
  foodType: Scalars['String'];
  contents: Scalars['String'];
  address: Scalars['String'];
};


export type IMeeting = {
  __typename?: 'Meeting';
  _id: Scalars['ID'];
  foodType: Scalars['String'];
  dateLimit: Scalars['Int'];
  title: Scalars['String'];
  recruitment: Scalars['Int'];
  countMember: Scalars['Int'];
  member: Array<Maybe<IUser>>;
  host: IUser;
  date: Scalars['String'];
  address: Scalars['String'];
  contents: Scalars['String'];
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type IMutation = {
  __typename?: 'Mutation';
  createMeeting: Scalars['ID'];
  updateMeeting: IMeeting;
  deleteMeeting: Scalars['ID'];
};


export type IMutationCreateMeetingArgs = {
  createMeetingInput: ICreateMeetingInput;
};


export type IMutationUpdateMeetingArgs = {
  meetingId: Scalars['ID'];
  updateMeetingInput: IUpdateMeetingInput;
};


export type IMutationDeleteMeetingArgs = {
  meetingId: Scalars['ID'];
};

export type IQuery = {
  __typename?: 'Query';
  fetchMeetings: Array<IMeeting>;
  fetchMeeting: IMeeting;
  fetchMemberCount: Array<IUser>;
};


export type IQueryFetchMeetingsArgs = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};


export type IQueryFetchMeetingArgs = {
  meetingId: Scalars['ID'];
};


export type IQueryFetchMemberCountArgs = {
  meetingId: Scalars['ID'];
};

export type IUpdateMeetingInput = {
  foodType: Scalars['String'];
  dateLimit: Scalars['Int'];
  title: Scalars['String'];
  recruitment: Scalars['Int'];
  date: Scalars['String'];
  address: Scalars['String'];
  contents: Scalars['String'];
};

export type IUser = {
  __typename?: 'User';
  _id: Scalars['ID'];
  name: Scalars['String'];
};

export type IUserInput = {
  _id: Scalars['ID'];
  name: Scalars['String'];
};
