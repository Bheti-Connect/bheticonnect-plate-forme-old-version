MESSAGE ?= "Update project"

commit:
    git add .
    git commit -m "${MESSAGE}"

push: commit
	git push origin ${BRANCH}