import { ISprint } from '../types/ISprint'

export class Sprint {
  public id: number;
  public name: string;
  public backlog?: any;
  public capacity?: number;
  public sprint_start?: Date;
  public sprint_end?: Date;
  public demo_date?: Date;
  public team_involved?: any;

  public constructor() {}


}
