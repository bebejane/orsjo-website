#!/bin/bash

if [[ "$VERCEL_GIT_COMMIT_REF" == "master"  ]] ; then
  # Build
  echo "✅ - Build can proceed"
  exit 1;

else
  # Don't build
  echo "🛑 - Build cancelled"
  exit 1;
fi
