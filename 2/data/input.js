let input =
{
    "data": [
        { "id": 1, "user": "mike@mail.com", "rating": 20, "disabled": false },
        { "id": 2, "user": "greg@mail.com", "rating": 8, "disabled": true },
        { "id": 3, "user": "max@mail.com", "rating": 20, "disabled": false },
        { "id": 4, "user": "philip@mail.com", "rating": 25, "disabled": false },
        { "id": 5, "user": "john@mail.com", "rating": 15, "disabled": true },
        { "id": 6, "user": "apollo@mail.com", "rating": 25, "disabled": false },
        { "id": 0, "user": "apollo@mail.com", "rating": 25, "disabled": false }
    ],
    "condition": 
    { 
        "exclude": [{ "user": "philip@mail.com" }, { "rating": 8 }], 
        "sort_by": ["rating", "user", "id"],
        "include": [{ "disabled": false }, { "user": "apollo@mail.com" }]
    }
}

export default input;