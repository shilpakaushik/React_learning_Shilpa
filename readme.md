git init — Initialize a new Git repository
git clone <repo-url> — Clone an existing repository
git status — Show the current status
git add <file> — Add file(s) to staging area
git add . — Add all changes to staging area
git commit -m "message" — Commit staged changes with a message
git push — Push commits to remote repository
git pull — Fetch and merge changes from remote repository
git fetch — Fetch changes from remote without merging
2. Branching
git branch — List branches
git branch <branch-name> — Create a new branch
git checkout <branch-name> — Switch to a branch
git checkout -b <branch-name> — Create and switch to a new branch
git merge <branch-name> — Merge a branch into current branch
git branch -d <branch-name> — Delete a branch
3. Viewing History
git log — Show commit history
git log --oneline — Compact commit history
git diff — Show changes between commits, branches, or working directory
4. Undoing Changes
git reset <file> — Unstage a file
git reset --hard — Discard all local changes
git checkout -- <file> — Discard changes in a file
5. Remote Repositories
git remote -v — List remote repositories
git remote add <name> <url> — Add a new remote
git remote remove <name> — Remove a remote
6. Stashing
git stash — Stash current changes
git stash apply — Reapply stashed changes
7. Tagging
git tag — List tags
git tag <tag-name> — Create a new tag
git push origin <tag-name> — Push a tag to remote
8. Others
git config — Configure Git settings
git help <command> — Show help for a command