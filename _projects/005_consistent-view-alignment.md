---
layout: project
name: "Consistent View Alignment Improves Foundation Models for 3D Medical Image Segmentation"
description: "A self-supervised regularisation technique that explicitly aligns representations across views to build stronger 3D medical foundation models."
date: 2025-09-17

categories:
  - project
  - publication

featured: true

tags:
  - machine-learning
  - medical-imaging
  - self-supervised-learning
  - segmentation

rank: 5

thumbnail: "cva.jpg"

citation: >
  "Consistent View Alignment Improves Foundation Models for 3D Medical Image Segmentation." <br>
  <u>Vaish, P.</u>, Meister, F., Heimann, T., Brune, C., Wolterink, J. M. <br>
  Preprint (in-review), 2025.

links:
  - label: "arXiv"
    url: "https://arxiv.org/abs/2509.13846"
  - label: "GitHub"
    url: "https://github.com/Tenbatsu24/LatentCampus"
---

## Overview

Many self-supervised representation-learning methods assume that any two "views" of the same data point are automatically useful for learning — but this work shows that meaningful latent structure doesn't emerge on its own from uncorrelated views; it has to be explicitly encouraged, especially in heterogeneous 3D medical volumes where mismatched views can hurt more than they help.

## Method

The paper introduces **Consistent View Alignment (CVA)**, a regularisation technique that constructs views using explicit region correspondences and aligns them at the patch/token level. This avoids the false positives that arise when contrastive learning is forced to match unrelated regions, while still enforcing local feature consistency.

## Results

CVA improves downstream performance for 3D medical image segmentation and highlights the importance of structured view alignment in representation learning. The method placed **1st (Primus vision transformer track)** and **2nd (ResEnc convolutional track)** in the MICCAI 2025 SSL3D challenge.
