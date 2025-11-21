// Editable photo metadata for the EventPhotos component.
// Add one entry per file in `/images`. The `path` can be either the bare
// filename (e.g. "4c.jpeg") or a relative path inside `/images`.
export type EventPhoto = {
  path: string;
  caption: string;
  date?: string;
};

export const eventPhotos: EventPhoto[] = [
  { path: "z4c.jpeg", caption: "Z4C Conference — Group Photo", date: "Mar 2024" },
  { path: "ai night challenge.jpeg", caption: "AI Night Challenge", date: "Oct 2023" },
  { path: "ai session1.jpeg", caption: "AI Session — Intro", date: "Jul 2024" },
  { path: "ai session2.jpeg", caption: "AI Session — Workshop", date: "Jul 2024" },
  { path: "ai session4.jpeg", caption: "AI Session — Panel", date: "Aug 2024" },
  { path: "ai session5.jpeg", caption: "AI Session — Hands-on", date: "Sep 2024" },
  { path: "ai session6.jpeg", caption: "AI Session — Demo Day", date: "Sep 2024" },
  { path: "ai sessioon3.jpeg", caption: "AI Session — Typo Example" },
  { path: "arsii1.jpeg", caption: "Arsii Meetup" },
  { path: "arsii2.jpeg", caption: "Arsii Meetup — Panel" },
  { path: "atast1.jpeg", caption: "Atast Workshop 1" },
  { path: "atast2.jpeg", caption: "Atast Workshop 2" },
  { path: "aws eniso.jpeg", caption: "AWS Eniso Workshop" },
  { path: "aws eniso2.jpeg", caption: "AWS Eniso — Group" },
  { path: "coding moon.jpeg", caption: "Coding Moon Challenge", date: "Oct 2023" },
  { path: "copilot summit.jpeg", caption: "Copilot Summit" },
  { path: "graduation.jpeg", caption: "Graduation Ceremony" },
  { path: "health hack1.jpeg", caption: "Health Hack — Pitch", date: "Feb 2024" },
  { path: "health hack2.jpeg", caption: "Health Hack — Team", date: "Feb 2024" },
  { path: "hr.jpeg", caption: "HR Event" },
  { path: "jipo 26.jpeg", caption: "Jipo Meetup — Awards" },
  { path: "jipo.jpeg", caption: "Jipo Meetup" },
  { path: "jipo23.jpeg", caption: "Jipo 23 Meetup" },
  { path: "meetup pro1.jpeg", caption: "Meetup Pro — Talk" },
  { path: "meetup pro2.jpeg", caption: "Meetup Pro — Q&A" },
  { path: "meetup pro3.jpeg", caption: "Meetup Pro — Networking" },
  { path: "mic day.jpeg", caption: "Mic Day" },
  { path: "mic-day.jpeg", caption: "Mic Day — Stage" },
  { path: "nateg.jpeg", caption: "Nateg Presentation" },
  { path: "prez.jpeg", caption: "Presentation" },
  { path: "session1.jpeg", caption: "Session 1" },
  { path: "session2.jpeg", caption: "Session 2" },
  { path: "session3.jpeg", caption: "Session 3" },
  { path: "tdd1.jpeg", caption: "TDD Workshop 1" },
  { path: "tdd2.jpeg", caption: "TDD Workshop 2" },
  { path: "tdd3.jpeg", caption: "TDD Workshop 3" },
  { path: "tdd4.jpeg", caption: "TDD Workshop 4" },
  { path: "tdd5.jpeg", caption: "TDD Workshop 5" },
  { path: "tdd6.jpeg", caption: "TDD Workshop 6" },
  { path: "tdd7.jpeg", caption: "TDD Workshop 7" },
  { path: "tdd8.jpeg", caption: "TDD Workshop 8" },
  { path: "the maze 24.jpeg", caption: "The Maze — Level 24" },
  { path: "the maze 25.jpeg", caption: "The Maze — Level 25" },
  { path: "the maze 255.jpeg", caption: "The Maze — Level 255" },
  { path: "the maze 5.jpeg", caption: "The Maze — Level 5" },
  { path: "the maze25.jpeg", caption: "The Maze — Finals" },
  { path: "the maze3.jpeg", caption: "The Maze — Level 3" },
  { path: "uvt hack.jpeg", caption: "UVT Hackathon" }
];

export default eventPhotos;
