
In this repository the branches are named according to the following convention:
- `main`: The main branch of the repository.
    - The main branch is the stable version of the code and should always be in a deployable state.
    - All changes to the main branch should be made through pull requests
    - We only merge to the main branch when we are ready to release a new version of the code. Changes should be tested in dev before merging to main.
- `dev`: The development branch of the repository.
    - The development branch is used for current development and testing of new features.
    - New branches should branch off of `dev` and be merged back into `dev` when the feature is complete.
    - merges to `dev` should be made through pull requests.
- `feature/*`: Feature branches for new features or improvements.
- `bug/*`: Bugfix branches for fixing bugs or issues.