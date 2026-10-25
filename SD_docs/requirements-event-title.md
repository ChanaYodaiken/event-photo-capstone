# Requirements — Rename event title (L-02)

**Student:** Chana Yodaiken  **Date:** 25/10/2026  **Fork URL:** i dont understand what to put here

## 1. Original request (do not reinterpret)
> I entered the wrong event name. I want to be able to change the event name displayed in the client's gallery.

## 2. Current behavior — verified facts
| Claim | Evidence: file/function/line or HTTP result | Verified? |
| --- | --- | --- |
| Event title exists in data model | export type EventRecord = {  title: string;}| yes|
| Current client gallery presents title |in the function: getClientGallery(eventId: string, clientId: string) this is what return to the client: return eventId: event.id,**title: event.title**, photos: event.photoIds,availableServices: event.serviceOptions.filter(option => option.enabled)} |yes |
| No rename endpoint exists in inspected route file | there is no put request in event service| no |

## 3. Actors / users / use cases / permissions
- Verified: 
- Must clarify: Who have a permmision to change the event name? (client? photographer?)

## 4. Goal, scope, out of scope
- Goal: Will be a possible to rename the event-name.
- In scope (confirmed):
- Out of scope (confirmed):
- Undecided: 

## 5. Functional requirements
- FR-1: [Only after clarification; mark provisional where needed]

## 6. Non-functional requirements / constraints
- NFR-1: [Only when justified; otherwise unresolved]

## 7. Ten analysis lenses from the preparation assignment
| Term | Question relevant to this change | Answer known? / evidence |
| --- | --- | --- |
| functional requirements | Is it possible to change the name when it allready displayed in the gallery for the client? | no answer yet|
| non-functional requirements |Hho long after the change is made should it be displayed to the client?  | no answer yet |
| actors / users | | |
| use cases | | |
| constraints | Is there a collection of events-name that the user has to choose the relevant option from there, or each user could choose how to name the event?| There is no a collections of evet name. evidence: The title field is definde:   title: string;|
| assumptions | only a photographer could change rename an event| no answer yet|
| acceptance criteria | | |
| ambiguity | | |
| missing information | | |
| scope | | |

## 8. Questions, assumptions, ambiguities
| Question or assumption | Why it matters | Evidence/status | Who decides? |
| --- | --- | --- | --- |

## 9. Acceptance criteria (provisional if decisions unresolved)
- Given an exist event and user whose has a permission, when the event name is renamed, then the new name is displayed to the client in the gallery
- Given an exist event and user whose has a permission, when the event name is allready an exist name of another event, then the system will show the user an error message, and offer to him to change the new name to another name.

## 10. Error cases and tests
- Unknown event:
- Unauthorized requester:
- Empty title:
- Existing client gallery after change:

## 11. AI checkpoints: understanding / questioning / spec review
Record one claim you verified in source and at least two AI suggestions with adopted/rejected/open status.

### AI question and spec review suggestions — reviewed critically
| AI suggestion | Essential / later / irrelevant / unverified | Justification | Evidence |
| --- | --- | --- | --- |

## 12. Remaining decisions (do not silently invent answers)
-

## 13. Personal reflection
- One fact discovered through code review:
- One AI suggestion you rejected or postponed, and why: The AI give me an example of acceptance criteria: WHEN: An event name is submitted, and this name contains invalid characters.
THEN: The system displays an error message indicating that the name is invalid, and requests that the user correct the name before saving
and i didnt get it. Because i assume that there is not a valid name, and a not valid name, and in any case i dont **know** that there is a condition of a valid name' so i cant put it as an acceptance criteria. 
