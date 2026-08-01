---
layout: project
name: "Towards Brain MRI Foundation Models for the Clinic: Findings from the FOMO25 Challenge"
description: "Large-scale challenge findings on building brain MRI foundation models that hold up on noisy, real-world clinical data."
date: 2026-04-13

categories:
  - project
  - publication

tags:
  - machine-learning
  - medical-imaging
  - foundation-models
  - self-supervised-learning

thumbnail: "fomo25-challenge.jpg"

citation: >
  "Towards Brain MRI Foundation Models for the Clinic: Findings from the FOMO25 Challenge." <br>
  Munk, A., Cerri, S., ..., <u>Vaish, P.</u>, et al. <br>
  Preprint (in-review), 2026.

links:
  - label: "arXiv"
    url: "https://arxiv.org/abs/2604.11679"
  - label: "challenge"
    url: "https://fomo25.github.io/"
---

## Overview

Deploying automated brain MRI analysis in the clinic is hard: clinical data is noisy and heterogeneous, and high-quality labels are expensive to obtain. Self-supervised learning (SSL) offers a way to leverage the huge volume of unlabeled clinical scans to train foundation models — but progress has been limited by small pretraining datasets and benchmarks that only use clean, research-grade data.

## Method

To close this gap, the authors organised **FOMO25**, a satellite challenge at MICCAI 2025. It released **FOMO60K**, a large unlabeled pretraining set of over 60,000 structural brain MRI scans from both clinical and research settings, and evaluated submitted models directly on data drawn from clinical workflows, under few-shot and out-of-domain conditions across tasks including infarct classification, meningioma segmentation, and brain age regression.

## Results

The paper reports the challenge design, the FOMO60K dataset, and the findings across participating methods, offering a benchmark and set of lessons for building brain MRI foundation models that generalise to messy, real-world clinical settings rather than just clean research data.
