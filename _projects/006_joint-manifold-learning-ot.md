---
layout: project
name: "Joint Manifold Learning and Optimal Transport for Dynamic Imaging"
description: "Combining low-dimensional image manifold models with optimal transport priors to better reconstruct time-evolving images from scarce data."
date: 2025-05-18

categories:
  - project
  - publication

featured: true

tags:
  - machine-learning
  - medical-imaging
  - optimal-transport
  - dynamic-imaging

rank: 6

thumbnail: "joint-ot.jpg"

citation: >
  "Joint Manifold Learning and Optimal Transport for Dynamic Imaging." <br>
  Dummer, S., <u>Vaish, P.</u>, Brune, C. <br>
  Scale Space and Variational Methods in Computer Vision (SSVM), 2025.

links:
  - label: "Springer NatureLink"
    url: "https://doi.org/10.1007/978-3-031-92366-1_31"
  - label: "arXiv"
    url: "https://arxiv.org/abs/2505.11913"
  - label: "GitHub"
    url: "https://github.com/SCdummer/joint-manifold-learning-and-ot"
---

## Overview

Dynamic imaging — tracking how biological structures change over time in medicine and cell biology — is hard when there are only a few time points and little data per time series. Prior work addresses this in one of two ways: either by assuming the images lie on a low-dimensional manifold (which uses information across time series but ignores temporal structure), or by using optimal transport (OT) priors on how images evolve (which respects temporal structure but only looks at one time series at a time).

## Method

This work proposes a latent model of the underlying image manifold and explicitly enforces consistency between three things: this latent representation, the observed time-series data, and an OT prior on how the images evolve over time. In effect, it lets latent-space models and OT interpolation improve each other.

## Results

The paper discusses and demonstrates the benefits of combining these two views: OT interpolations become more informed by shared structure across time series, while latent manifold models gain a temporal prior — offering a practical middle ground for imaging settings where both data and time points are limited.
