shopt -s globstar
for f in ./docs/**/*
do
  mv "$f" "${f//_/-}"
done

